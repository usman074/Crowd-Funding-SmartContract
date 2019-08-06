module.exports = {
  
  networks: {
   
     ganache: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     gas : 5000000,
     network_id: "*"       // Any network (default: none)
    }
  }
};
