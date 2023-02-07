-- login with sudo mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

--     logout and log back in with sudo mysql -u root -p
ALTER USER 'root'@'localhost' IDENTIFIED WITH auth_socket;

CREATE USER 'ben'@'192.168.1.117' IDENTIFIED WITH mysql_native_password BY 'Secret_Password!@#$1234';

create table bujo.table_event_type
(
    table_event_type_pk bigint auto_increment
        primary key,
    user_guid           varchar(36) not null,
    value               varchar(50) not null
);

create table bujo.table_event_type_matrix
(
    table_event_type_matrix_pk bigint auto_increment
        primary key,
    table_events_fk            bigint not null,
    table_event_type_fk        bigint not null,
    constraint table_event_type_matrix_table_event_type_matrix_pk_uindex
        unique (table_event_type_matrix_pk)
);

create index table_event_type_matrix_table_event_type_table_event_type_pk_fk
    on bujo.table_event_type_matrix (table_event_type_fk);

create index table_event_type_matrix_table_events_table_events_pk_fk
    on bujo.table_event_type_matrix (table_events_fk);

create table bujo.table_events
(
    table_events_pk bigint auto_increment
        primary key,
    user_guid       varchar(36) not null,
    timestamp       bigint      not null,
    text            text        not null,
    constraint table_events_table_events_pk_uindex
        unique (table_events_pk)
);
