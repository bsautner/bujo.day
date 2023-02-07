sudo apt update
sudo apt upgrade
sudo apt install mysql-server
sudo systemctl enable mysql.service
sudo systemctl start mysql.service
#sudo vi /etc/mysql/mysql.conf.d/mysql.cnf to set bind other than localhost
