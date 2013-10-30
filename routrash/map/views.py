# Create your views here.
# -*- coding: utf-8 -*- 
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.core.mail import EmailMessage
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render_to_response, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.template import RequestContext
from django.utils.html import *



def inicio(request):
	title = 'RouTrash'
	return render_to_response('base.html',locals(), context_instance=RequestContext(request))


def ingreso(request):
	if request.method == 'POST':
		user = authenticate(username=request.POST.get('user'),password=request.POST.get('clave'))
		if user is not None:
			if user.is_active:
				login(request,user)
				return HttpResponseRedirect('/')
			else:
				estado = 1 # Error no Activo
		else:
		 estado = 3 # Usuario no Existe		
							
		
	if estado:
		if estado == 1:
			error = 'Este usuario no esta activo si cree que es un error contacte con el administrador.'
		elif estado == 2: 
			error = 'Todos los campos son Obligatorios.'
		elif estado == 3:
			error = 'Usuario o Contraseña Invalida.'			
		
		context = {'title':'RouTrash','error':error}
		return render_to_response('base.html',context,context_instance=RequestContext(request))

def salir(request):
	logout(request)
	return HttpResponseRedirect('../../../../')		