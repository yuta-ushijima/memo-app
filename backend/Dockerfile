# Backend(Rails/MySQL)
# 使用するrubyのバージョン
FROM ruby:2.4.1

# このDockerfileの管理者
LABEL maintainer="Yuta_Ushijima <contact@yuta-u.com>"

# 文字コードの設定
ENV LANG=C.UTF-8 \
    LC_ALL=C.UTF-8 \
    LC_CTYPE="utf-8"

# 使用するエディタ
ENV EDITOR vim

# インストールするライブラリなど
RUN apt-get update --fix-missing \
  && apt-get -y upgrade \
  && apt-get install -qq -y \
    apt-utils \
    build-essential \
    ca-certificates \
    curl \
    git \
    glances \
    graphviz \
    htop \
    libcurl3 \
    libpq-dev \
    man \
    mysql-client \
    nano \
    nodejs \
    patch \
    software-properties-common \
    sudo \
    unzip \
    vim \
    wget \
    xvfb \
    zlib1g \
    zlib1g-dev \
  && apt-get autoremove -y \
  && apt-get clean all \
  && fc-cache -fv

# precache slow gems for quicker bundle
RUN gem update --system
RUN gem install -q --no-rdoc --no-ri pkg-config --version 1.3.1
RUN gem install -q --no-rdoc --no-ri rails --version 5.2.1
RUN gem install -q --no-rdoc --no-ri nokogiri --version 1.8.4
RUN gem install -q --no-rdoc --no-ri mysql2 --version 0.5.2

COPY Gemfile Gemfile.lock ./
RUN if test -f Gemfile.lock; then \
    bundle install --binstubs --jobs=4 --retry=3; \
  fi
RUN rm Gemfile Gemfile.lock

RUN mkdir -p /memo-app/backend
WORKDIR /memo-app/backend
ADD . .

ENV RAILS_SERVE_STATIC_FILES=true \
    PORT=3200 \
    TERM=xterm

ENV PORT=3200 \
    RAILS_SERVE_STATIC_FILES=true \
    TERM=xterm

EXPOSE 3200
EXPOSE 3310
