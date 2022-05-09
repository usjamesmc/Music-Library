# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-qeb#*cf9lntsi@=t-t!!=@gcou)$9*flk&d347hm(bdv5fb0_8'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'music_library_database',
        'HOST': 'localhost',
        'USER': 'root',
        'PASSWORD': 'password'
    }
}