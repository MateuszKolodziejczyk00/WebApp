from datetime import datetime
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

import dateutil.parser as dt

from .models import Reservation


@api_view(['POST'])
def MakeReservation(request):
    date = dt.parse(request.data['date'])
    date = date.replace(day = date.day + 1) # some bug? day was always parsed as one-before
    time = datetime.strptime(request.data['time'], '%H:%M')
    date = date.replace(hour = time.hour, minute = time.minute)
    
    newReservation = Reservation(email = request.data['email'], name = request.data['name'], numberOfPeople = request.data['numberOfPeople'], phoneNumber = request.data['phone'], date = date)
    newReservation.save()
    return Response()