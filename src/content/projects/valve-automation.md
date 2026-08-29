---
title: Valve Automation
description: Valve Automation
date: 2026-08-01
category: Work
tags: [C, Arduino, Python, GUI]
featured: true
---

This project aimed to automate pressure monitoring and valve control for a two stage light gas gun, which operates at extremely high pressures. The objectives were to display the real-time pressures, control the valve actuation, plotting pressures for each sensor, and data-logging at a specific selectable sample rate, all through a GUI.

The I/O of the system was handled using an Arduino. Pressure transducers are used to measure the system pressures, with the potential across a resistor representing the corresponding pressure. The valve actuation was achieved by digital HIGH/LOW outputs.

The GUI was developped in Python with tkinter, which enabled simple interaction between the user and the MCU. Communication, data logging and plotting was handled through Python's serial, csv, and matplotlib libraries.

<figure>
	<img src="/images/valve_automation_gui.png" alt="Valve Automation Window" />
	<figcaption>Valve Automation GUI Window</figcaption>
</figure>

The GUI is easy to use and navigate for the user. It incorportates a port selection dropdown with a refresh and connect button, which can support the laptop having multiple devices plugged in or adds/changes the port. Users can start or stop saving pressure data from all pressure sensors with a adjustable sample rate from the dropdown. A large prominent red reset button provides an emergency shutdown, that includes a confimation window, which closes all valves by setting all pins to LOW. The main dashboard displays the real-time pressure vales with the corresponding location/pin. In addition, toggle buttons that control the valve actuation that are easy and intuitive are included. Real-time pressure plots with a selective time window are displayed, allowing easy monitoring over the many sections of the two stage light gas gun.

