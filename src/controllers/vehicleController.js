class VehicleController {
    constructor(vehicleModel) {
        this.vehicleModel = vehicleModel;
    }

    async addVehicle(req, res) {
        const { brand, model, year, available } = req.body;
        try {
            const newVehicle = await this.vehicleModel.create({ brand, model, year, available });
            res.status(201).json(newVehicle);
        } catch (error) {
            res.status(500).json({ message: 'Error adding vehicle', error });
        }
    }

    async listVehicles(req, res) {
        try {
            const vehicles = await this.vehicleModel.findAll();
            res.status(200).json(vehicles);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving vehicles', error });
        }
    }

    async searchVehicle(req, res) {
        const { id } = req.params;
        try {
            const vehicle = await this.vehicleModel.findById(id);
            if (vehicle) {
                res.status(200).json(vehicle);
            } else {
                res.status(404).json({ message: 'Vehicle not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving vehicle', error });
        }
    }

    async searchByBrand(req, res) {
        const { brand } = req.params;
        try {
            const vehicles = await this.vehicleModel.findByBrand(brand);
            res.status(200).json(vehicles);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving vehicles by brand', error });
        }
    }
}

export default VehicleController;