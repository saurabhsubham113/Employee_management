drop database if exists employee;
create database employee;

use employee;

drop table if exists user;

create table user(
    id int primary key,auto_increment,
    name VARCHAR(100),
    location VARCHAR(100),
    email VARCHAR(100),
    mobile DECIMAL(10,0)
);
