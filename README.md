# Blog for test

Hello this is my blog website.
To create it i used nix and nodejs and posgres.
If you want to launch it, you should run `nix develop` to run the development flake.
Now you need to create a database:
`createdb mydb`
 after that you should run the migration
```bash
psql -f ./migrations/01_initial_migration.sql -d mydb
```
Also for now, you should add some initial data to database
`psql -d mydb`
```SQL
INSERT INTO users(name,password) VALUES('admin','admin');
INSERT INTO posts(title,description) VALUES('test','Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer nunc posuere ut hendrerit semper vel class aptent taciti sociosqu ad litora torquent per conubia nostra inceptos himenaeos orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus donec rhoncus eros lobortis nulla molestie mattis scelerisque maximus eget fermentum odio phasellus non purus est efficitur laoreet mauris pharetra vestibulum fusce dictum risus blandit quis suspendisse aliquet nisi sodales consequat magna ante condimentum neque at luctus nibh finibus facilisis dapibus etiam interdum tortor ligula congue sollicitudin erat viverra ac tincidunt nam porta elementum a enim euismod quam justo lectus commodo augue arcu dignissim velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper rutrum gravida cras eleifend turpis fames primis vulputate ornare sagittis vehicula praesent dui felis venenatis ultrices proin libero feugiat tristique accumsan maecenas potenti ultricies habitant morbi senectus netus suscipit auctor curabitur facilisi cubilia curae hac habitasse platea dictumst lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque.');
```

And after all of that you can use npm run start to start server :)

Tech stack:
- Nodejs
- PosgtreSQL
- HTMX
- TailwindCSS
