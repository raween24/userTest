
const Intervention = require('../modelAPI/Interventionmodel');

// GET all interventions
exports.getAllInterventions = async (req, res) => {
  try {
    const interventions = await Intervention.find();
    res.json(interventions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching interventions', error: err.message });
  }
};
// GET intervention by ID
exports.getInterventionById = async (req, res) => {
  try {
    const intervention = await Intervention.findById(req.params.id);
    if (!intervention) return res.status(404).json({ message: 'Intervention not found' });
    res.json(intervention);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching intervention', error: err.message });
  }
};

// CREATE intervention
exports.createIntervention = async (req, res) => {
  try {
    const newIntervention = new Intervention(req.body);
    const savedIntervention = await newIntervention.save();
    res.status(201).json(savedIntervention);
  } catch (err) {
    res.status(500).json({ message: 'Error creating intervention', error: err.message });
  }
};

// UPDATE intervention
exports.updateIntervention = async (req, res) => {
  try {
    const updatedIntervention = await Intervention.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedIntervention) return res.status(404).json({ message: 'Intervention not found' });
    res.json(updatedIntervention);
  } catch (err) {
    res.status(500).json({ message: 'Error updating intervention', error: err.message });
  }
};

// DELETE intervention
exports.deleteIntervention = async (req, res) => {
  try {
    const deletedIntervention = await Intervention.findByIdAndDelete(req.params.id);
    if (!deletedIntervention) return res.status(404).json({ message: 'Intervention not found' });
    res.json(deletedIntervention);
  } catch (err) {
    res.status(500).json({ message: 'Error deleting intervention', error: err.message });
  }
};
