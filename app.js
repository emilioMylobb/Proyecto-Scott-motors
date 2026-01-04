(function() {
    'use strict';

    var app = angular.module('scottMotorsApp', ['ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'vistas/inicio.html',
                controller: 'InicioCtrl'
            })
            .when('/automovil/:id', {
                templateUrl: 'vistas/detalle.html',
                controller: 'DetalleCtrl'
            })
            .when('/mantenimiento', {
                templateUrl: 'vistas/mantenimiento.html',
                controller: 'MantenimientoCtrl'
            })
            .when('/contacto', {
                templateUrl: 'vistas/contacto.html',
                controller: 'ContactoCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

    app.factory('DataService', [function() {
        
        var marcas = [
            { id: 1, nombre: 'Toyota', logoUrl: 'img/toyota logo.png' },
            { id: 2, nombre: 'Ford', logoUrl: 'img/ford logo.png' },
            { id: 3, nombre: 'Honda', logoUrl: 'img/honda logo.png' },
            { id: 4, nombre: 'Nissan', logoUrl: 'img/nissan logo.png' }
        ];

        var modelos = [
            { id: 1, marcaId: 1, nombre: 'Corolla' },
            { id: 2, marcaId: 1, nombre: 'Camry' },
            { id: 3, marcaId: 1, nombre: 'RAV4' },
            { id: 4, marcaId: 2, nombre: 'Mustang' },
            { id: 5, marcaId: 2, nombre: 'Explorer' },
            { id: 6, marcaId: 3, nombre: 'Civic' },
            { id: 7, marcaId: 3, nombre: 'Accord' },
            { id: 8, marcaId: 4, nombre: 'Sentra' },
            { id: 9, marcaId: 4, nombre: 'Kicks' }
        ];

         var automoviles = [
            { id: 1, marca: 'Toyota', modelo: 'Corolla', color: 'Blanco', colorHex: '#FFFFFF', anio: 2023, precio: 420000, marcaId: 1, modeloId: 1, 
              imagenUrl: 'img/Tcorolla.jpg', 
              sketchfabModelId: '997ec246f17f432fbf2c80de62334be6',
              galeriaImagenes: [
                'img/Tcorolla.jpg',
                'img/corrola.avif',
                'img/corolla1.jpg'
              ]
            },
            { id: 2, marca: 'Toyota', modelo: 'Camry', color: 'Rojo', colorHex: '#ff0000ff', anio: 2024, precio: 595000, marcaId: 1, modeloId: 2, 
              imagenUrl: 'img/Tcamrey.jpeg', 
              sketchfabModelId: '5fc8ff0bf51647e1beacb6a5b42ac9e3',
              galeriaImagenes: [
                'img/camry2.webp',
                'img/camry.jpeg',
                'img/Tcamrey.jpeg'
              ]
            },
            { id: 3, marca: 'Honda', modelo: 'Civic', color: 'Rojo', colorHex: '#ff0000ff', anio: 2023, precio: 530000, marcaId: 3, modeloId: 6, 
              imagenUrl: 'img/civic1.jpg', 
              sketchfabModelId: 'db60ed8ca5074803b8225fd213c423ea',
              galeriaImagenes: [
                'img/civic1.jpg',
                'img/civic2.avif',
                'img/civi1.avif'
              ]
            },
            { id: 4, marca: 'Ford', modelo: 'Mustang', color: 'Azul cielo', colorHex: '#627cf0ff', anio: 2024, precio: 1050000, marcaId: 2, modeloId: 4, 
              imagenUrl: 'img/mustangF.webp', 
              sketchfabModelId: '16f0753d26a04a089223f2d9107a777f',
              galeriaImagenes: [
                'img/mustangF.webp',
                'img/mustang3.avif',
                'img/mustang.avif'
              ]
            },
            { id: 5, marca: 'Nissan', modelo: 'Sentra', color: 'Plata', colorHex: '#4f4f57ff', anio: 2022, precio: 310000, marcaId: 4, modeloId: 8, 
              imagenUrl: 'img/Nsentra.webp', 
              sketchfabModelId: '92a9cabd5ae94cf1a745748652501307',
              galeriaImagenes: [
                'img/sentra.webp',
                'img/sentra.jpg',
                'img/sentra1.webp'
              ]
            },
            { id: 6, marca: 'Toyota', modelo: 'RAV4', color: 'Plata', colorHex: '#C0C0C0', anio: 2023, precio: 610000, marcaId: 1, modeloId: 3, 
              imagenUrl: 'img/Trav4.jpg', 
              sketchfabModelId: 'fce8c48330674e659b73fcd597468dd8',
              galeriaImagenes: [
                'img/rav.webp',
                'img/rav1.webp',
                'img/Trav4.jpg'
              ]
            },
            { id: 7, marca: 'Honda', modelo: 'Accord', color: 'Rojo', colorHex: '#ff0000ff', anio: 2024, precio: 750000, marcaId: 3, modeloId: 7, 
              imagenUrl: 'img/acord3.avif', 
              sketchfabModelId: '89820f6164ec491da844f286b612d8d4',
              galeriaImagenes: [
                'img/accord.jpg',
                'img/acord2.png',
                'img/acord3.avif'
              ]
            },
            { id: 8, marca: 'Ford', modelo: 'Explorer', color: 'Negro', colorHex: '#000000', anio: 2023, precio: 890000, marcaId: 2, modeloId: 5, 
              imagenUrl: 'img/explorer.jpg', 
              sketchfabModelId: 'a47d2d8c83b44d348329dba8f92d1adc',
              galeriaImagenes: [
                'img/explorer.avif',
                'img/explorer.jpg',
                'img/explorer1.webp'
              ]
            },
            { id: 9, marca: 'Nissan', modelo: 'Kicks', color: 'Rojo', colorHex: '#ff0000ff', anio: 2021, precio: 310000, marcaId: 4, modeloId: 9, 
              imagenUrl: 'img/Nkicks.webp', 
              sketchfabModelId: '942244be457745678c54a7ff5330ba8d',
              galeriaImagenes: [
                'img/kicks.webp',
                'img/Nkicks.jpg',
                'img/kicks2.jpg'
              ]
            },
            { id: 10, marca: 'Toyota', modelo: 'Avanza', color: 'Plata', colorHex: '#808080', anio: 2022, precio: 315000, marcaId: 1, modeloId: 1, 
              imagenUrl: 'img/avanza.webp', 
              sketchfabModelId: '7abdc92c1e0d4c6d80f9fdc517b85626',
              galeriaImagenes: [
                'img/avanza.webp',
                'img/avanza1.webp',
                'img/avanza3.jpg'
              ]
            }
        ];
        
        var nextAutoId = 11;
        var nextMarcaId = 5;
        var nextModeloId = 10;

        return {
            getMarcas: function() { return marcas; },
            getModelos: function() { return modelos; },
            getAutomoviles: function() { return automoviles; },
            
            getAutomovilById: function(id) {
                return automoviles.find(function(a) { return a.id === id; });
            },
            
            getMarcaById: function(id) {
                return marcas.find(function(m) { return m.id === id; });
            },

            getModeloById: function(id) {
                return modelos.find(function(m) { return m.id === id; });
            },

            saveAutomovil: function(auto) {
                if (auto.id) {
                    var index = automoviles.findIndex(function(a) { return a.id === auto.id; });
                    if (index > -1) {
                        angular.extend(automoviles[index], auto);
                    }
                } else {
                    auto.id = nextAutoId++;
                    automoviles.push(auto);
                }
            },

            deleteAutomovil: function(id) {
                var index = automoviles.findIndex(function(a) { return a.id === id; });
                if (index > -1) {
                    automoviles.splice(index, 1);
                }
            },
            
            saveMarca: function(marca) {
                if (marca.id) {
                    var index = marcas.findIndex(function(m) { return m.id === marca.id; });
                    if (index > -1) { marcas[index] = marca; }
                } else {
                    marca.id = nextMarcaId++;
                    marcas.push(marca);
                }
            },
            
            deleteMarca: function(id) {
                var index = marcas.findIndex(function(m) { return m.id === id; });
                if (index > -1) { marcas.splice(index, 1); }
            },
            
            saveModelo: function(modelo) {
                if (modelo.id) {
                    var index = modelos.findIndex(function(m) { return m.id === modelo.id; });
                    if (index > -1) { modelos[index] = modelo; }
                } else {
                    modelo.id = nextModeloId++;
                    modelos.push(modelo);
                }
            },
            
            deleteModelo: function(id) {
                var index = modelos.findIndex(function(m) { return m.id === id; });
                if (index > -1) { modelos.splice(index, 1); }
            }
        };
    }]);

    app.controller('MainCtrl', ['$scope', '$location', function($scope, $location) {
        $scope.$watch(function() {
            return $location.path();
        }, function(newPath) {
            if (newPath === '/') {
                $scope.navbarClass = 'navbar-floating';
                $scope.bodyStyle = { 'padding-top': '0px' };
            } else {
                $scope.navbarClass = 'navbar-inverse navbar-fixed-top';
                $scope.bodyStyle = { 'padding-top': '60px' };
            }
        });
    }]);

    app.controller('InicioCtrl', ['$scope', 'DataService', '$timeout', function($scope, DataService, $timeout) {
        $scope.automoviles = DataService.getAutomoviles();
        $scope.marcas = DataService.getMarcas();
        $scope.filtroMarca = "";
        $scope.filtroAnio = "";

        $scope.imagenPrincipal = $scope.automoviles[0].imagenUrl;
        
        $scope.cambiarImagenPrincipal = function(url) {
            $scope.imagenPrincipal = url;
        };
        
        // --- Lógica para formulario de contacto en Inicio ---
        $scope.contacto = {};
        $scope.enviarMensaje = function() {
            if ($scope.contactForm.$valid) {
                // Aquí iría la lógica real de envío. Por ahora simulamos éxito.
                alert('¡Mensaje enviado correctamente!'); 
                $scope.contacto = {};
                $scope.contactForm.$setPristine();
                $scope.contactForm.$setUntouched();
            } else {
                // Opcional: Mostrar alerta de error o dejar que las validaciones visuales actúen
            }
        };
    }]);

    app.controller('DetalleCtrl', ['$scope', '$routeParams', 'DataService', '$timeout', function($scope, $routeParams, DataService, $timeout) {
        
        var autoId = parseInt($routeParams.id);
        $scope.auto = DataService.getAutomovilById(autoId);

        $scope.imagenPrincipal = $scope.auto.galeriaImagenes[0];
        $scope.cambiarImagenPrincipal = function(url) {
            $scope.imagenPrincipal = url;
        };

        var sketchfabApi = null;

        $timeout(function() {
            var iframeEl = document.getElementById('api-frame');
            
            if (!iframeEl) {
                console.error("No se encontró el iframe 'api-frame'.");
                return;
            }
            
            if (!$scope.auto || !$scope.auto.sketchfabModelId) {
                console.error("Auto no encontrado o no tiene sketchfabModelId", $scope.auto);
                return;
            }
            
            console.log("Iframe encontrado, inicializando API para el ID:", $scope.auto.sketchfabModelId);

            var client = new Sketchfab('1.12.1', iframeEl);

            function onViewerReady(api) {
                console.log('El visor de Sketchfab está listo.');
                sketchfabApi = api;
                sketchfabApi.start(function() {
                    console.log('Visor iniciado.');
                });
                sketchfabApi.addEventListener('viewerstop', function() {
                    console.log('El usuario dejó de mover la cámara.');
                });
            }

            function onViewerError() {
                console.error('Error al cargar el visor de Sketchfab');
            }

            client.init($scope.auto.sketchfabModelId, {
                success: onViewerReady,
                error: onViewerError,
                ui_controls: 1,
                ui_infos: 0,
                autostart: 1,
                ui_theme: 'dark'
            });
        }, 500);

        $scope.moverCamara = function() {
            if (!sketchfabApi) {
                console.warn("La API no está lista todavía.");
                return;
            }
            console.log("Moviendo cámara...");
            sketchfabApi.setCameraLookAt([15, 8, 15], [0, 0, 0], 1.5, function(err) {
                if (!err) {
                    console.log('Cámara reiniciada');
                }
            });
        };
    }]);


    app.controller('ContactoCtrl', ['$scope', function($scope) {
        $scope.contacto = {};
        $scope.enviarMensaje = function() {
            if ($scope.contactForm.$valid) {
                console.log('Mensaje enviado (simulación) para: ' + $scope.contacto.nombre);
                $scope.mensajeEnviado = true;
                $scope.contacto = {};
                $scope.contactForm.$setPristine();
                $scope.contactForm.$setUntouched();
            } else {
                console.warn('Por favor, completa todos los campos requeridos.');
                $scope.mensajeEnviado = false;
            }
        };
    }]);

    // --- CONTROLADOR DE MANTENIMIENTO  ---
    app.controller('MantenimientoCtrl', ['$scope', 'DataService', '$timeout', '$location', function($scope, DataService, $timeout, $location) {
        
        $scope.esAdmin = false;
        $scope.loginData = { password: '' };
        $scope.loginError = false;

        
        $timeout(function() {
            $('#loginModal').modal({
                backdrop: 'static', 
                keyboard: false     
            });
            $('#loginModal').modal('show');
        });

        $scope.verificarLogin = function() {
            if ($scope.loginData.password === 'admin') {
                $scope.esAdmin = true;
                $('#loginModal').modal('hide');
            } else {
                $scope.loginError = true;
                $scope.loginData.password = '';
            }
        };

        $scope.cancelarLogin = function() {
            $('#loginModal').modal('hide');
            
            $timeout(function() {
                $location.path('/');
            }, 300);
        };

        
        $scope.automoviles = DataService.getAutomoviles();
        $scope.marcas = DataService.getMarcas();
        $scope.modelos = DataService.getModelos();
        
        $scope.tabActivo = 'autos'; 

        $scope.seleccionarTab = function(tab) {
            $scope.tabActivo = tab;
        };
        
        $scope.modelosFiltrados = [];
        $scope.autoSeleccionado = {};
        $scope.marcaSeleccionada = {};
        $scope.modeloSeleccionado = {};
        $scope.modoEdicionAuto = false;
        $scope.modoEdicionMarca = false;
        $scope.modoEdicionModelo = false;
        $scope.nuevaImagenUrl = ""; 

        $scope.filtrarModelos = function() {
            if ($scope.autoSeleccionado.marcaId) {
                var marca = DataService.getMarcaById(parseInt($scope.autoSeleccionado.marcaId));
                if(marca) {
                    $scope.autoSeleccionado.marca = marca.nombre;
                }
                $scope.modelosFiltrados = $scope.modelos.filter(function(m) {
                    return m.marcaId === parseInt($scope.autoSeleccionado.marcaId);
                });
            } else {
                $scope.modelosFiltrados = [];
            }
        };
        
        $scope.actualizarNombreModelo = function() {
            if ($scope.autoSeleccionado.modeloId) {
                var modelo = DataService.getModeloById(parseInt($scope.autoSeleccionado.modeloId));
                if(modelo) {
                    $scope.autoSeleccionado.modelo = modelo.nombre;
                }
            }
        };

        $scope.prepararNuevoAuto = function() {
            $scope.autoSeleccionado = { 
                colorHex: '#FFFFFF',
                galeriaImagenes: [] 
            };
            $scope.modoEdicionAuto = false;
            $scope.modelosFiltrados = [];
            $scope.nuevaImagenUrl = "";
            $('#autoModal').modal('show');
        };

        $scope.prepararEditarAuto = function(auto) {
            $scope.autoSeleccionado = angular.copy(auto);
            
            if (!$scope.autoSeleccionado.galeriaImagenes) {
                $scope.autoSeleccionado.galeriaImagenes = [];
            }

            $scope.autoSeleccionado.marcaId = String($scope.autoSeleccionado.marcaId);
            $scope.filtrarModelos();
            $scope.autoSeleccionado.modeloId = String($scope.autoSeleccionado.modeloId);
            $scope.modoEdicionAuto = true;
            $scope.nuevaImagenUrl = "";
            $('#autoModal').modal('show');
        };

        $scope.agregarImagenGaleria = function() {
            if($scope.nuevaImagenUrl) {
                if(!$scope.autoSeleccionado.galeriaImagenes) {
                    $scope.autoSeleccionado.galeriaImagenes = [];
                }
                $scope.autoSeleccionado.galeriaImagenes.push($scope.nuevaImagenUrl);
                $scope.nuevaImagenUrl = "";
            }
        };

        $scope.eliminarImagenGaleria = function(index) {
            $scope.autoSeleccionado.galeriaImagenes.splice(index, 1);
        };

        $scope.guardarAuto = function() {
            DataService.saveAutomovil($scope.autoSeleccionado);
            $('#autoModal').modal('hide');
        };

        $scope.borrarAuto = function(id) {
            if (true) { 
                console.log("Simulando borrado de auto " + id);
            }
        };
        
        $scope.prepararNuevaMarca = function() {
            $scope.marcaSeleccionada = {};
            $scope.modoEdicionMarca = false;
            $('#marcaModal').modal('show');
        };
        
        $scope.prepararEditarMarca = function(marca) {
            $scope.marcaSeleccionada = angular.copy(marca);
            $scope.modoEdicionMarca = true;
            $('#marcaModal').modal('show');
        };
        
        $scope.guardarMarca = function() {
            DataService.saveMarca($scope.marcaSeleccionada);
            $('#marcaModal').modal('hide');
        };
        
        $scope.borrarMarca = function(id) {
            if (true) {
                console.log("Simulando borrado de marca " + id);
            }
        };
        
        $scope.prepararNuevoModelo = function() {
            $scope.modeloSeleccionado = {};
            $scope.modoEdicionModelo = false;
            $('#modeloModal').modal('show');
        };
        
        $scope.prepararEditarModelo = function(modelo) {
            $scope.modeloSeleccionado = angular.copy(modelo);
            $scope.modeloSeleccionado.marcaId = String($scope.modeloSeleccionado.marcaId);
            $scope.modoEdicionModelo = true;
            $('#modeloModal').modal('show');
        };
        
        $scope.guardarModelo = function() {
            var marca = DataService.getMarcaById(parseInt($scope.modeloSeleccionado.marcaId));
            $scope.modeloSeleccionado.marcaNombre = marca.nombre;
            DataService.saveModelo($scope.modeloSeleccionado);
            $('#modeloModal').modal('hide');
        };
        
        $scope.borrarModelo = function(id) {
            if (true) {
                console.log("Simulando borrado de modelo " + id);
            }
        };
        
        $scope.getMarcaNombre = function(marcaId) {
            var marca = DataService.getMarcaById(marcaId);
            return marca ? marca.nombre : 'N/A';
        };

    }]);

})();