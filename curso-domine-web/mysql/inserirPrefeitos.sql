SELECT * FROM cidades

SELECT * FROM prefeitos

INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rodrigo Neves', 4),
    ('Raquel Lyra', 5),
    ('Zenaldo Coutino', NULL);

INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rafael Greca', NULL)