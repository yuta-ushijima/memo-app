#!/bin/bash

set -e

cp development.env .env

read -p "Docker(イメージ)を初期化しますか？ (y/n)" initialize < /dev/tty
case $initialize in
  y|Y) docker rmi -f $(docker images -a -q) || true ;;
esac
read -p "Docker(コンテナ・ボリューム)を初期化しますか？ (y/n)" initialize < /dev/tty
case $initialize in
  y|Y) docker rm -f -v $(docker ps -a -q) || true ;;
esac

read -p "リビルドしますか？ (y/n)" rebuild < /dev/tty
case $rebuild in
  y|Y) args=" --build" ;;
  *) args="" ;;
esac

rm -rf ./backend/docker/mysql/volumes
docker-compose up --detach --remove-orphans $args
echo
echo "Backend: http://localhost:3000"
echo "MemoFront: http://localhost:8100"

read -p "何かキーを押すとログを表示します：" showLogs < /dev/tty
case $showLogs in
  *) docker-compose logs -f ;;
esac
