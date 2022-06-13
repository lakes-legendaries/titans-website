###########################
Titans Of Eden Website Code
###########################

This code provides the basic html and css/js to run the website.

**********
Deployment
**********

To upload to the `dev server
<https://titansfileserverdev.z13.web.core.windows.net/>`_, run:

.. code-block:: bash

   cmd/deploy

This requires that you have a connection SAS in
:code:`~/secrets/titans-fileserver-dev`.

To push from the dev server to the `live server <https://titansfileserver
.z13.web.core.windows.net/>`_, run:

.. code-block:: bash

   cmd/release

This requires that you additionally have a connection SAS in
:code:`~/secrets/titans-fileserver`.

The live website is served by a `CDN <https://titans-website.azureedge.net/>`_,
and is accessible at the DNS `TitansOfEden.com/
<https://titans-website.azureedge.net/>`_.

****************
Supporting Files
****************

This website code requires that the following assets be uploaded separately:

#. Demo assets (managed in OneDrive)
#. Rulebooks and Print-and-Plays (managed in OneDrive)
#. Image assets (managed in OneDrive)
#. Video assets (managed in OneDrive)
#. Demo code (managed in `GitHub
   <https://github.com/lakes-legendaries/titans-demo>`_)

All of the associated :code:`upload.sh` scripts (located where each of these
assets are managed) upload to the dev server. All of these assets are
automatically copied from the dev server to the live server on deployment.
