class ClientController {
    constructor(clientModel) {
        this.clientModel = clientModel;
    }

    async registerClient(req, res) {
        const { name, email } = req.body;
        try {
            const newClient = await this.clientModel.create({ name, email });
            res.status(201).json(newClient);
        } catch (error) {
            res.status(500).json({ message: 'Error registering client', error });
        }
    }

    async listClients(req, res) {
        try {
            const clients = await this.clientModel.findAll();
            res.status(200).json(clients);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving clients', error });
        }
    }

    async searchClient(req, res) {
        const { id } = req.params;
        try {
            const client = await this.clientModel.findById(id);
            if (client) {
                res.status(200).json(client);
            } else {
                res.status(404).json({ message: 'Client not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error searching for client', error });
        }
    }
}

export default ClientController;