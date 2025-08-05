class RentalController {
    constructor(rentalModel, vehicleModel, clientModel) {
        this.rentalModel = rentalModel;
        this.vehicleModel = vehicleModel;
        this.clientModel = clientModel;
    }

    async rentVehicle(req, res) {
        const { vehicleId, clientId } = req.body;
        try {
            const rental = await this.rentalModel.createRental(vehicleId, clientId);
            res.status(201).json(rental);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async listClientsByVehicle(req, res) {
        const { vehicleId } = req.params;
        try {
            const clients = await this.rentalModel.getClientsByVehicle(vehicleId);
            res.status(200).json(clients);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async listVehiclesByClient(req, res) {
        const { clientId } = req.params;
        try {
            const vehicles = await this.rentalModel.getVehiclesByClient(clientId);
            res.status(200).json(vehicles);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async returnVehicle(req, res) {
        const { rentalId } = req.params;
        try {
            const result = await this.rentalModel.returnVehicle(rentalId);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default RentalController;