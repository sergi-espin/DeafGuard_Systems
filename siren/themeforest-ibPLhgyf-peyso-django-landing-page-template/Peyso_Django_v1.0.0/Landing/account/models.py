from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Usuario(models.Model):
    nombre = models.CharField(max_length=50)
    correo = models.EmailField(max_length=50)
    telefono = models.CharField(max_length=10)

    def __str__(self):
        return self.nombre

class Opinion(models.Model):
    usuario_id = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    nota = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    opinion = models.CharField(max_length=1000)
    compra_verificada = models.BooleanField()

    def __str__(self):
        return f'Opinión de {self.usuario_id}'
