---
title: Formula SAE
description: Aerodynamics work on the Q26 Formula SAE car
date: 2025-11-13
category: FSAE
tags: [CATIA V5, ANSA]
featured: false
---

My work on the aerodynamics package for the Q26 Formula SAE car. Each section below covers a separate component.

<!-- Optional: one sentence on your role/team here, e.g. "I am part of the aerodynamics sub-team, responsible for ..." -->

## Sidepod

The team moved the radiator to the rear of the car, cooled by an electric fan instead of air from the sidepod. Freed from its cooling duty, the sidepod could be redesigned purely to generate downforce.

<figure>
	<img src="/images/catia_sidepod.jpg" alt="CATIA model of the Q26 sidepod bodywork" />
	<figcaption>Sidepod bodywork modeled in CATIA</figcaption>
</figure>

The new sidepod, designed in CATIA, is essentially a side diffuser exploiting the ground effect: the curved underside narrows, accelerating the air and dropping its pressure to generate downforce, then expands gradually at the rear to recover pressure without flow separation. Edge plates contain the airflow and reduce vortices by separating the low- and high-pressure air along the sides of the car.

Because this was designed early in the year, the model is fully parametric — variables such as ground clearance and front and rear lengths can be adjusted when integrating with the final chassis. The surface model was verified watertight in ANSA: every edge shared by exactly two surfaces, with no gaps or overlaps.

<figure>
	<img src="/images/sidepod_ansa01.png" alt="ANSA watertight check of the sidepod surface model" />
	<figcaption>Watertight check performed in ANSA</figcaption>
</figure>

## Swan Neck

<!-- FILL IN: what the swan neck is for on Q26 — rear wing mount? Which wing element does it support? -->
<!-- FILL IN: why a swan-neck design was chosen (e.g. mounting from the top surface keeps the wing's suction side clean) -->
<!-- FILL IN: tools used (CATIA? FEA?), material, how it was made/validated -->

<!--
<figure>
	<img src="/images/YOUR-IMAGE.jpg" alt="Describe the image for screen readers" />
	<figcaption>Caption shown under the image</figcaption>
</figure>
-->
