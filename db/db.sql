USE note_app1;

CREATE TABLE note1(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nhead VARCHAR(50) NOT NULL,
    ndesc VARCHAR(50) NOT NULL
);

SELECT * FROM note1;

INSERT INTO note1 (nhead, ndesc) VALUES (?,?)