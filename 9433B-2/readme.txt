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

1. In order to access the website, we must first configure the Site URL first or we must
first update the Site URL of the Website since WordPress doesn't automatically change the
URL of the website when changing the URL, so we must configure it mannually.

2. In the VM, type ifconfig to get the IP address of the VM.

3. Open your browser and type your IP address along with /phpmyadmin in the address bar
(e.g. 10.10.x.x/phpmyadmin).

4. The phpMyAdmin log-in page will open and then log-in by:
Username: root
Password: group2

5. Then go the wordpress schema named 'wordpress', then look for the 'wp-options' table. Then edit
the first two columns, which has an option_name 'siteurl' and 'home'. The 'option_value' of the
said columns must be your IP address along with '/wordpress', so it will look like this:

		----- wp_options table ------
option_id	option_name		option_value
1		siteurl			http://ipaddress/wordpress
2		home			http://ipaddress/wordpress


6. After configuring the Site URL, go to your browser and open a new tab and try accessing the website
by placing what you have placed on Step 5 (e.g. 10.10.x.x/wordpress).

7. The School Website should open.


===CONFIGURING THE WEB APPLICATION===

1. In order to access the web application, first configure the host file.
For windows users: it is located in c/windows/system32/drivers/etc/

2. Edit the Host file and add the following line and save it.
	'IP Address of the server'			www.group2.org

3. Go to your web browser and type in www.group2.org.

4. you can now access and use the web application. 

5. Download the schedules to save the schedules in order for your device to access the application even when not connected to the inter
