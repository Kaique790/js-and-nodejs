select * from estados

select Sigla as 'Sigla do estado', nome as 'Nome do estado' from estados
WHERE regiao = 'nordeste'

SELECT nome, regiao, populacao from estados
where populacao >= 10
ORDER BY populacao 

SELECT * FROM estados
WHERE regiao = 'Centro-Oeste'
ORDER BY populacao;


SELECT * FROM estados
WHERE regiao = 'centro-oeste' && populacao >= 3
ORDER BY populacao DESC