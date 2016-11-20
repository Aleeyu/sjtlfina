#设置后续的SQL语句编码
SET NAMES UTF8;
#试着删除数据库dangdang
DROP DATABASE IF EXISTS liyu3741;
#创建数据库dangdang，指定保存数据时的字符集
CREATE DATABASE liyu3741 CHARSET=UTF8;
#进入dangdang
USE liyu3741;

#创建保存书籍信息的表： dd_book
#bid(自增主键)  name  price  birthday  isOnsale
CREATE TABLE message(
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(64),
  phone VARCHAR(16),
  message VARCHAR(512),
  timee VARCHAR(64)
);
CREATE TABLE news(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(512),
  timee VARCHAR(64),
  msg VARCHAR(2056),
  img VARCHAR(128)
);
CREATE TABLE cases(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(512),
  timee VARCHAR(64),
  lei VARCHAR(16),
  img VARCHAR(1024),
  msg VARCHAR(2048)
);
CREATE TABLE user(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(16),
  pwd VARCHAR(64)
);
INSERT INTO user VALUES (
  NULL,
  'qys',
  'zxcvbnm'
);