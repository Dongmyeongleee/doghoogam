package com.c103.dog.api.service;

import com.c103.dog.DB.entity.Dog;
import com.c103.dog.DB.entity.Feed;
import com.c103.dog.DB.entity.Memo;
import com.c103.dog.DB.entity.User;
import com.c103.dog.DB.repository.DogRepository;
import com.c103.dog.DB.repository.FeedRepository;
import com.c103.dog.DB.repository.MemoRepository;
import com.c103.dog.api.request.MemoPostRequest;
import com.c103.dog.api.request.MemoUpdateRequest;
import com.c103.dog.error.Exception.custom.SomethingNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Service
@Slf4j
public class MemoServiceImpl implements MemoService {
    @Autowired
    DogRepository dogRepository;

    @Autowired
    MemoRepository memoRepository;

    @Override
    public Memo registerMemo(MemoPostRequest memoPostReq, User user) throws IllegalArgumentException {

        Memo memoEntity = new Memo();
        memoEntity.setContent(memoPostReq.getContent());
        memoEntity.setMemoDate(Timestamp.valueOf(LocalDateTime.of(
                LocalDate.of(memoPostReq.getYear(),memoPostReq.getMonth(),memoPostReq.getDay())
                , LocalTime.NOON
        )));
        memoEntity.setDone(false);
        //memoEntity.setMemoDate(Timestamp.valueOf(memoPostReq.getMemoDate()));
        memoEntity.setUser(user);

        return memoRepository.save(memoEntity);
    }

    @Override
    public Memo getByMemoPk(int memoPk) {
        return memoRepository.getById(memoPk);
    }

    @Override
    public Memo updateMemo(MemoUpdateRequest memoUpdateReq) throws IllegalArgumentException{
        Memo memo = memoRepository.getById(memoUpdateReq.getMemoPk());

        memo.setContent(memoUpdateReq.getContent());

        return memoRepository.save(memo);

    }

    @Override
    public void deleteMemo(int memoPk) {
        memoRepository.deleteById(memoPk);
    }

    @Override
    public List<Memo> findMemoByMonth(User user, String year, String month) {
        return memoRepository.findMemoByMonth(user.getPk(), year, month);
    }

    @Override
    public List<Memo> findMemoByDay(User user) {
        LocalDate now = LocalDate.now();
        log.info("year : {}",now.getYear());
        log.info("month : {}",now.getMonthValue());
        log.info("day : {}",now.getDayOfMonth());
        return memoRepository.findMemoByDay(user.getPk(), String.valueOf(now.getYear()), String.valueOf(now.getMonthValue()), String.valueOf(now.getDayOfMonth()));
    }

    @Override
    public List<Memo> findMemoByUser(User user) {
        return null;
    }

    @Override
    public void changeDone(int memoPk) {
        Memo memo = memoRepository.findById(memoPk).orElseThrow(() -> new SomethingNotFoundException(memoPk + " "));
        System.out.println(memo.getPk() + "///////////////////////////////////////////////");
        memo.setDone(memo.isDone()?false:true);
        memoRepository.save(memo);
    }
}
