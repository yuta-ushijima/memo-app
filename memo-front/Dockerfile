# Frontend(memo-front)
# nodeのバージョン指定
FROM node:8.12.0

# このDockerfileの管理者
LABEL maintainer="Yuta_Ushijima <contact@yuta-u.com>"

# 文字コード
ENV LANG C.UTF-8
# 使用するエディターの種類
ENV EDITOR vim

# 作成するディレクトリ
RUN mkdir -p /memo-app/memo-front
WORKDIR /memo-app/memo-front
ADD . .

# npm updateの実行
RUN npm update
# node-sassのリビルド
RUN npm rebuild node-sass

# package.jsonの内容に則ってビルドを実行
CMD [ "npm", "run", "start" ]
