import { Router } from 'express'
import exercisesController from '../controllers/ExercisesController'

const router = new Router()

// Obtiene ejercicios disponibles
router.get('/exercises', exercisesController.index)

// Crea un nuevo ejercicio
router.post('/exercises', exercisesController.store)

// Obtiene detalles del ejercicio
router.get('/exercises/:id', exercisesController.details)

router.delete('/exercises/:id', exercisesController.delete)

export default router
