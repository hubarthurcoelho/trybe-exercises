SELECT * FROM hr.employees;

SELECT MAX(salary) FROM hr.employees;

SELECT MAX(salary) - MIN(salary) FROM hr.employees;

SELECT job_id, AVG(salary) AS avgSalary FROM hr.employees
GROUP BY job_id
ORDER BY avgSalary DESC;

SELECT ROUND(MAX(salary), 2), ROUND(MIN(salary), 2), ROUND(SUM(salary), 2), ROUND(AVG(salary), 2) FROM hr.employees;

SELECT job_id, SUM(salary) FROM hr.employees
GROUP BY job_id;

SELECT job_id, SUM(salary) FROM hr.employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';

SELECT job_id, SUM(salary) FROM hr.employees
GROUP BY job_id
HAVING job_id != 'IT_PROG';

SELECT department_id, COUNT(department_id) AS perDep, AVG(salary) AS avgSal FROM hr.employees
GROUP BY department_id
HAVING perDep > 10;

SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';
SET SQL_SAFE_UPDATES = 1;

SELECT first_name FROM hr.employees
WHERE char_length(first_name) >= 8;

SELECT employee_id AS id, first_name, YEAR(hire_date) AS hiredIn FROM hr.employees;

SELECT employee_id AS id, first_name, DAY(hire_date) AS hiredIn FROM hr.employees;

SELECT employee_id AS id, first_name, MONTH(hire_date) AS hiredIn FROM hr.employees;

SELECT UCASE(CONCAT(first_name, ' ', last_name)) AS full_name FROM hr.employees;

SELECT UCASE(CONCAT(first_name, ' ', last_name)) AS full_name, hire_date FROM hr.employees
WHERE YEAR(hire_date) = '1987' AND MONTH(hire_date) = '7';

SELECT first_name, last_name, DATEDIFF(NOW(), hire_date) AS hiredFor FROM hr.employees;

SELECT first_name, last_name, year(NOW()) - year(hire_date) AS hiredFor FROM hr.employees;