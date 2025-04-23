SELECT
    regiao as 'Região',
    sum(populacao) as Total
FROM estados
group by regiao
ORDER BY Total desc