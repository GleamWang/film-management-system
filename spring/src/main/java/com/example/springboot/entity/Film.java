package com.example.springboot.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("spider")
@Data
public class Film {

    @TableId(type = IdType.AUTO)
    private Integer id;
    private String title;
    private String link;
    private String imgsrc;
    private String rating;
    private String judgenum;
    private String inq;
    private String director;
    private String scriptwriter;
    private String type;
    private String status;
    private String language;
    private String date;
    private String time;

}
