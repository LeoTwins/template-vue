-- +migrate Up
CREATE TABLE IF NOT EXISTS test (
  id SERIAL,
  title VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS categories (
  id SERIAL,
  name VARCHAR(255) NOT NULL,
  display_order INT,
  PRIMARY KEY (id),
  UNIQUE KEY(name)
);

CREATE TABLE IF NOT EXISTS todos (
  id SERIAL,
  user_name VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  category_id BIGINT UNSIGNED,
  -- SERIALだとエラー | 【 MySQL 】 外部キー制約がつけられなくてハマった話 | https: / / qiita.com / usedbookhappy / items / 880fd38fa3e0b0ad7e82
  CONSTRAINT FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
  due_date DATE,
  status ENUM('todo', 'done') NOT NULL,
  deleted boolean,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id, user_name)
);

-- +migrate Down
DROP TABLE IF EXISTS test CASCADE;

DROP TABLE IF EXISTS categories CASCADE;

DROP TABLE IF EXISTS todos CASCADE;