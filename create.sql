drop table example.installment;
drop table example.transaction;

create table example.transaction (
	code text primary key,
	amount numeric,
	number_installments integer,
	payment_method text,
	date timestamp default now()
);
create table example.installment (
	code text references example.transaction (code),
	number integer,
	amount numeric,
	primary key (code, number)
);