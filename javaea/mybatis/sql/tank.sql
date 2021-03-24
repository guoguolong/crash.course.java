CREATE TABLE `user` (
  `user_id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `username` VARCHAR(45) NULL COMMENT '用户名',
  `password` VARCHAR(45) NULL COMMENT '密码',
  `mobile` VARCHAR(11) NOT NULL COMMENT '手机号码',
  `email` VARCHAR(45) NULL COMMENT '联系邮箱',
  `nickname` VARCHAR(45) NULL COMMENT '昵称',
  `full_name` VARCHAR(45) NULL COMMENT '姓名',
  `birthday` CHAR(7) NULL COMMENT '生日',
  `gender` TINYINT(1) UNSIGNED NULL COMMENT '性别(1男，0女）',
  `city_id` INT NULL COMMENT '城市ID',
  `is_student` TINYINT(1) UNSIGNED NULL COMMENT ' 是学生吗',
  `work_from` CHAR(7) NULL COMMENT '工作年月',
  `mobile_tel` VARCHAR(11) NULL COMMENT '移动电话',
  `highlight` VARCHAR(200) NULL COMMENT '一句话介绍',
  `occupation` VARCHAR(45) NULL COMMENT '职业信息',
  `wechat` VARCHAR(45) NULL COMMENT '微信',
  `github` VARCHAR(45) NULL COMMENT 'github账号',
  `qq` VARCHAR(45) NULL COMMENT 'qq',
  `weibo` VARCHAR(45) NULL COMMENT '微博号',
  `avatar` VARCHAR(200) NULL COMMENT '头像URL',
  `points` INT NULL DEFAULT 20 COMMENT '剩余积分',
  `role` VARCHAR(10) NULL DEFAULT 'general' COMMENT '用户角色',
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `user_name_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `mobile_UNIQUE` (`mobile` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
COMMENT = '用户';

INSERT INTO `user` (`user_id`, `username`, `password`, `mobile`, `email`, `nickname`, `full_name`, `birthday`, `gender`, `city_id`, `is_student`, `work_from`, `mobile_tel`, `highlight`, `occupation`, `wechat`, `github`, `qq`, `weibo`, `avatar`, `points`, `role`, `created_at`, `updated_at`) VALUES (DEFAULT, 'admin', 'e10adc3949ba59abbe56e057f20f883e', '13787657711', 'admin@banyuan.club', 'God', NULL, NULL, 1, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 40, 'admin', now(), now());
INSERT INTO `user` (`user_id`, `username`, `password`, `mobile`, `email`, `nickname`, `full_name`, `birthday`, `gender`, `city_id`, `is_student`, `work_from`, `mobile_tel`, `highlight`, `occupation`, `wechat`, `github`, `qq`, `weibo`, `avatar`, `points`, `role`, `created_at`, `updated_at`) VALUES (DEFAULT, 'allen', 'e10adc3949ba59abbe56e057f20f883e', '13987651233', 'allen@banyuan.club', 'Allen', NULL, NULL, 1, 6, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 40, 'general', now(), now());
