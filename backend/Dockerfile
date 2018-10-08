# Backend(Rails/MySQL)
# 使用するrubyのバージョン
FROM ruby:2.5.1

# このDockerfileの管理者
MAINTAINER Yuta_Ushijima <contact@yuta-u.com>

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
  && fc-cache -f -v

# Add dumb init to process system events
RUN wget https://github.com/Yelp/dumb-init/releases/download/v1.2.0/dumb-init_1.2.0_amd64 -O /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init

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

RUN mkdir -p /rally/backend
WORKDIR /rally/backend
ADD . .

ENV RAILS_SERVE_STATIC_FILES=true \
    PORT=3000 \
    TERM=xterm

ENV PORT=3000 \
    # RACK_ENV=development \
    # RAILS_ENV=development \
    RAILS_SERVE_STATIC_FILES=true \
    TERM=xterm

# Run asset pipeline if we're in a Rails app.
# RUN RAILS_ENV=production SENTRY_DSN=disable bundle exec rake assets:precompile || true

CMD dumb-init -- docker/bin/start rails

EXPOSE 3000
EXPOSE 3306
