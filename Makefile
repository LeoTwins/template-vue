# ビルド
up-build:
	docker-compose up -d --build
# 起動
up:
	docker-compose up -d
# 停止
down:
	docker-compose down
# 再起動
restart:
	@make down
	@make up
# webコンテナに入る
exec-front:
	docker-compose exec front /bin/bash

exec-api:
	docker-compose exec training-api /bin/bash

# mysql -uroot -p >> use dev >> show tables; OR describe user;
exec-db:
	docker-compose exec db /bin/bash 

tbls:
	tbls doc --rm-dist

openapi-typescript:
	cd front/vue_app &&  npx openapi-typescript /Users/ohbay/Documents/1_Study/traning-system/training-0717/document/swagger.yml -o ./schema/index.d.ts
