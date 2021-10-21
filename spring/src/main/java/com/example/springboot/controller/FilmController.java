package com.example.springboot.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.springboot.common.Result;
import com.example.springboot.entity.Film;
import com.example.springboot.mapper.FilmMapper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@RequestMapping("/film")
public class FilmController {

    @Resource
    FilmMapper filmMapper;

    @GetMapping
    public Result<?> findPage(@RequestParam(defaultValue = "1") Integer pageNum,
                              @RequestParam(defaultValue = "10") Integer pageSize,
                              @RequestParam(defaultValue = "") String search){
        LambdaQueryWrapper<Film> wrapper = Wrappers.<Film>lambdaQuery();
        if(StringUtils.isNotBlank(search)){
            wrapper.like(Film::getTitle, search);
        }
        Page<Film> filmPage = filmMapper.selectPage(new Page<Film>(pageNum, pageSize), wrapper);
        return Result.success(filmPage);
    }

    @GetMapping("/selectTitle")
    public Film selectFilm(@RequestParam("title") String title){
        QueryWrapper wrapper = new QueryWrapper();
        wrapper.eq("title", title);
        Film film = filmMapper.selectOne(wrapper);
        return film;
    }

    @PostMapping
    public Result insert(@RequestBody Film film){
        filmMapper.insert(film);
        return Result.success();
    }

    @PutMapping
    public Result update(@RequestBody Film film){
        filmMapper.updateById(film);
        return Result.success();
    }

    @DeleteMapping("/{id}")
    public Result<?> update(@PathVariable Long id){
        filmMapper.deleteById(id);
        return Result.success();
    }
}
