package com.c103.dog.DB.entity.redis;

import lombok.*;
import org.springframework.data.redis.core.RedisHash;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;
import java.util.List;

@Data
@RedisHash(value = "people", timeToLive = 30)
@ToString
@NoArgsConstructor
public class Person {
    @Id
    private String id;

    private List<Integer> dogPk; //강아지 Pk;

    private int dogState;
    private double lat; // 경도
    private double lng;

    private int latArea; // 경도
    private int lngArea;


}
