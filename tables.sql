DROP TABLE IF EXISTS student, studentToCourses,course;

CREATE TABLE IF NOT EXISTS student (
id char(36) NOT NULL ,
  name varchar(64) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS course(
id char(36) NOT NULL ,
  name varchar(64) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS studentToCourses(
id char(36) NOT NULL ,
  student_id varchar(64) DEFAULT NULL,
  course_id varchar(64) DEFAULT NULL,
  PRIMARY KEY (student_id, course_id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

INSERT INTO student(id,name) VALUES
('90035339-644b-47b4-bea4-43181424b76b','Måns Hallgren'),
('22005339-644b-47b4-bes4-43181424b76b','Sarah Dale'),
('99292999-644b-47b4-eer2-43181424b76b','Sofie Toveberg'),
('22005339-644b-47b4-0023-43181424b76b','Arnold Fisbel');

INSERT INTO course(id,name) VALUES
('22045339-644b-47b4-bea4-43181sd4b76b','AFI'),
('24328271-232e-47b4-bes4-43181424b76b','DOA'),
('92321999-644b-47b4-eer2-4318we34b76b','DBT'),
('22005339-644b-4wb4-0023-45fydwl4ufwf','MDI');

INSERT INTO studentToCourses(student_id,course_id) VALUES
('90035339-644b-47b4-bea4-43181424b76b','22045339-644b-47b4-bea4-43181sd4b76b'),
('90035339-644b-47b4-bea4-43181424b76b','24328271-232e-47b4-bes4-43181424b76b'),
('22005339-644b-47b4-0023-43181424b76b','92321999-644b-47b4-eer2-4318we34b76b'),
('22005339-644b-47b4-bes4-43181424b76b','22005339-644b-4wb4-0023-45fydwl4ufwf');
