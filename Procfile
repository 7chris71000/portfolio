web: bundle exec puma -C config/puma.rb
resque: env TERM_CHILD=1 RESQUE_TERM_TIMEOUT=8 QUEUE='*' bundle exec rails resque:work
