package com.cos.businessservice.api.service;


import com.cos.businessservice.DB.entity.User;
import com.cos.businessservice.DB.entity.Walk;
import com.cos.businessservice.DB.entity.redis.Person;
import com.cos.businessservice.DB.entity.redis.PersonId;
import com.cos.businessservice.DB.repository.DogRepository;
import com.cos.businessservice.DB.repository.WalkRepository;
import com.cos.businessservice.DB.repository.redis.PersonIdRedisRepository;
import com.cos.businessservice.DB.repository.redis.PersonRedisRepository;
import com.cos.businessservice.api.request.PersonEndRequest;
import com.cos.businessservice.api.request.PersonRequest;
import com.cos.businessservice.api.request.PersonWalkingRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class WalkServiceImpl implements WalkService {

    private final double STD_LAT = 124;
    private final double STD_LNG = 33;

    @Autowired
    WalkRepository walkRepository;

    @Autowired
    DogRepository dogRepository;



    @Autowired
    PersonRedisRepository redisRepo;

    @Autowired
    PersonIdRedisRepository personIdRedisRepository;

    public LocalTime toTime(int time) {

        int hour = time/(60*60);
        int minute = time/60;
        int second = time%60;
        System.out.println(time +"초는 " + hour + "시간, " + minute + "분, " + second + "초입니다.");

        return LocalTime.of(hour,minute,second);
    }


//    @Override
//    public List<Person> walkingDogList(PersonRequest walkReq) {
//        String pk = Integer.toString(walkReq.getDogPk());
//        int lngArea = (int)((walkReq.getLng() - STD_LNG)*1000);
//        int latArea = (int)((walkReq.getLat() - STD_LAT)*1000);
//
//        Person p = redisRepo.findById(pk).orElse(null);
//        LocalDateTime createdAt = LocalDateTime.now();
//        if(p == null){
//            p = Person.builder()
//                    .id(pk)
//                    .lng(walkReq.getLng())
//                    .lat(walkReq.getLat())
//                    .dogState(walkReq.getDogState())
//                    .build();
//        }else{
//            createdAt = p.getCreatedAt();
//            redisRepo.deleteById(pk);
//        }
//
//        List<Person> personList = redisRepo.findAll();
//        p.setCreatedAt(createdAt);
//        p.setLatArea(latArea);
//        p.setLngArea(lngArea);
//        redisRepo.save(p);
//
//        List<Person> check = new ArrayList<>();
//
//        for(Person std : personList){
//            if(Math.abs(std.getLatArea() - latArea) > 1 || Math.abs(std.getLngArea() - lngArea) > 1 ) continue;
//            check.add(std);
//        }
//
//        return check;
//    }


    @Override
    public String startWalking(PersonRequest personReq,User user) {
        int lngArea = (int)((personReq.getLng() - STD_LNG)*1000);
        int latArea = (int)((personReq.getLat() - STD_LAT)*1000);

        Person p = new Person();
        p.setDogPk(personReq.getDogPk());
        p.setLng(personReq.getLng());
        p.setLat(personReq.getLat());
        p.setDogState(personReq.getDogState());
        p.setLatArea(latArea);
        p.setLngArea(lngArea);

        log.info(p.toString());

        String id = redisRepo.save(p).getId();

        log.info("personId 저장 시작");
        log.info("userId : {} ", user.getUserId());
        PersonId personId = new PersonId();
        personId.setUserId(user.getUserId());
        personId.setPersonId(id);
        personId.setDogPk(personReq.getDogPk());
        PersonId now = personIdRedisRepository.save(personId);
        log.info("PersonId : " + now.toString());

        log.info(id);
        return id;




    }

    @Override
    public List<Person> walkingDogList(PersonWalkingRequest personWalkingReq, String userId) {
        int lngArea = (int)((personWalkingReq.getLng() - STD_LNG)*1000);
        int latArea = (int)((personWalkingReq.getLat() - STD_LAT)*1000);


        log.info("산책중");
        log.info("//////////////////////////////////////////////////////////////");
        String pk = personWalkingReq.getPersonId();
        Person p = redisRepo.findById(pk).orElse(new Person());
        PersonId personId = personIdRedisRepository.findById(userId).orElse(new PersonId());
        p.setId(pk);
        p.setLng(personWalkingReq.getLng());
        p.setLat(personWalkingReq.getLat());
        p.setLngArea(lngArea);
        p.setLatArea(latArea);
        if(p.getDogPk() == null && personId.getDogPk() != null) {
            p.setDogPk(personId.getDogPk());
        }
        redisRepo.deleteById(pk);
        List<Person> personList = redisRepo.findAll();

        Person save = redisRepo.save(p);
        List<Person> check = new ArrayList<>();

        if(personList != null){

            for(Person std : personList) {
                if (std == null) continue;
                check.add(std);
            }
        }

        log.info("본인 정보 : "  + save.toString());
        log.info("personList.size : " + check.size() );

        return check;

    }

    @Override
    public boolean endWalking(PersonEndRequest walkReq, User user) {
        log.info("체크");
        PersonId personId = personIdRedisRepository.findById(user.getUserId())
                .orElse(null);


        if(personId == null){
            return false;
        }

        log.info(walkReq.lineToString());

        Person p = redisRepo.findById(personId.getPersonId()).orElse(new Person());
        log.info(p.toString());

        if(p.getId() == null){
            return false;
        }


        Walk walk = new Walk();
        walk.setDogPkList(p.dogPktoString());
        walk.setWalkPath(walkReq.lineToString());
        walk.setCoin(walkReq.getCoin());
        walk.setDistance(walkReq.getDistance());
        walk.setTime(walkReq.getTime());
        walk.setUser(user);
        walkRepository.save(walk);

        redisRepo.deleteById(personId.getPersonId());
        personIdRedisRepository.deleteById(user.getUserId());

        return true;
    }

    @Override
    public Walk getByWalkPk(int walkPk) {
        return walkRepository.getById(walkPk);
    }

    @Override
    public List<Walk> findWalkByDay(User user, String year, String month) {
        log.info("walk 검색");
        return walkRepository.findWalkByDay(user.getPk(), year, month);
    }
}
