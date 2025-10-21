// Branch data for Alcoa Aluminium Scaffolding locations
// Updated for Abu Dhabi, UAE operations
export const branchesData = [
  {
    id: 'abu-dhabi-hq',
    name: 'Abu Dhabi Headquarters',
    type: 'headquarters',
    address: {
      street: 'Musaffah Industrial Area',
      city: 'Abu Dhabi',
      state: 'Abu Dhabi',
      postcode: '00000',
      country: 'UAE'
    },
    contact: {
      phone: '+971 58 137 5601',
      fax: '+971 58 137 5602',
      email: 'alcoaaluminiumscaffolding1@gmail.com',
      manager: 'Syed Tawakal',
      managerTitle: 'Regional Director'
    },
    services: [
      'MS Scaffolding Rent',
      'MS Scaffolding Sale',
      'Installation & Setup',
      'Installation/Disassembly',
      'Maintenance',
      'Safety Inspections',
      'Training',
      'Scaffolding Delivery',
      'Aluminium Scaffolding',
      'Warehouse Ladder',
      'Fiberglass Ladder',
      'A Type Ladder',
      'Ladder Manufacturers'
    ],
    hours: {
      monday: '7:00 AM - 6:00 PM',
      tuesday: '7:00 AM - 6:00 PM',
      wednesday: '7:00 AM - 6:00 PM',
      thursday: '7:00 AM - 6:00 PM',
      friday: '7:00 AM - 6:00 PM',
      saturday: '8:00 AM - 4:00 PM',
      sunday: 'Emergency Only'
    },
    specialties: ['High-rise Projects', 'Industrial Constructions', 'Marine Scaffolding'],
    established: '2008',
    staffCount: 45,
    warehouseSize: '5,000 sqm',
    serviceRadius: '150 km',
    coordinates: { lat: 24.2992, lng: 54.6973 }
  }
];

// Helper functions
export const getBranchById = (id) => {
  return branchesData.find(branch => branch.id === id);
};

export const getBranchesByState = (state) => {
  return branchesData.filter(branch => branch.address.state === state);
};

export const getHeadquarters = () => {
  return branchesData.find(branch => branch.type === 'headquarters');
};

export const getAllBranches = () => {
  return branchesData.filter(branch => branch.type === 'branch');
};

export const getBranchesWithService = (service) => {
  return branchesData.filter(branch => 
    branch.services.includes(service)
  );
};

export const getBranchesWithSpecialty = (specialty) => {
  return branchesData.filter(branch => 
    branch.specialties.includes(specialty)
  );
};