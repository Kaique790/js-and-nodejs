SELECT 
    e.nome as Estado,
    c.nome as Cidade,
    regiao as Região
FROM estados e, cidades c
WHERE e.id = c.estado_id;

SELECT
    c.nome AS Cidade,
    e.nome AS Estado,
    regiao AS Região
FROM estados e
INNER JOIN cidades c on e.id = c.estado_id
