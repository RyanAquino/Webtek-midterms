===CONFIGURING THE VM:===

1. Import the appliance.

2. When connecting to a LAN port, please set the network adapter to Bridged and 
choose the name of the Network Adapter of the computer, and choose the name of the Wi-Fi
adapter of the computer if connected to a wireless network.

3. Start the VM appliance, then log-in to the appliance by
Username: webtek
Password: 2017

4. Then type the command sudo service apache2 start to start the server.


===CONFIGURING THE CMS WEBSITE===
1. In order to access the cms website, first configure the host file.
For windows users: it is located in c/windows/system32/drivers/etc/

2. Edit the Host file and add the following line and save it.
	'IP Address of the server'			www.wordpresslaw.org

3. Go to your web browser and type in www.wordpresslaw.org

4. you can now access and use the cms website.


===CONFIGURING THE WEB APPLICATION===

1. In order to access the web application, first configure the host file.
For windows users: it is located in c/windows/system32/drivers/etc/

2. Edit the Host file and add the following line and save it.
	'IP Address of the server'			www.group2.org

3. Go to your web browser and type in www.group2.org.

4. you can now access and use the web application. 

5. Download the schedules to save the schedules in order for your device to access the application even when not connected to the inter
