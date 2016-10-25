What is this?
--
A little demo showing off how well React plays in a Rails environment with the
help of the `react-rails` gem.

Helpful links
--
* [React documentation](https://facebook.github.io/react/docs/hello-world.html)
* [The react-rails gem](https://github.com/reactjs/react-rails)
* [Babel and ES6 documentation](https://babeljs.io/docs/learn-es2015/)

Building the project
--
This project requires ruby >= 2.3.1. If you're using [rbenv](https://github.com/rbenv/rbenv) then you should be able to run `rbenv install` from the project root to get the right version.

```bash
$ git clone https://github.com/ninjascribble/rails-react-demo
$ cd rails-react-demo
$ rbenv install
$ bundle install
$ rails db:create
$ rails db:migrate
$ rails db:seed
$ rails s
* Listening on tcp://localhost:3000
Use Ctrl-C to stop
```
