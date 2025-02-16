select * from estados where id = 23

insert into cidades (nome, area, estado_id)
values ('Campinas', 795, 29)

insert into cidades (nome, area, estado_id)
values ('Niterói' 133.9, 23)

insert into cidades (nome, area, estado_id)
values(
    'Caruaru',
    920.6,
    (select id from estados where sigla = 'PE')
);

insert into cidades (nome, area, estado_id)
    values ('Aracaju', 181.9, (SELECT id from estados WHERE sigla = 'SE'));

insert into cidades (nome, area, estado_id)
    values('São Cristovão', 432.4, (select id from estados where sigla = 'SE'))

select * from cidades

-- delete from cidades where id > 1