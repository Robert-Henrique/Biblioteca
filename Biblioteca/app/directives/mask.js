app.directive("dateMask", function () {
    return {
        require: '?ngModel',
        link: function ($scope, element, attrs, controller) {
            element.mask("99/99/9999", {
                completed: function () {
                    controller.$setViewValue(Date.parse(this.val(), "dd/MM/yyyy"));
                    $scope.$apply();
                }
            });
        }
    };
});

app.directive("phoneMask", function () {
    return {
        require: '?ngModel',
        link: function ($scope, element, attrs, controller) {
            element.mask("(99) 9999-9999", {
                completed: function () {
                    $scope.$apply();
                }
            });
        }
    };
});

app.directive("cpfMask", function () {
    return {
        require: '?ngModel',
        link: function ($scope, element, attrs, controller) {
            element.mask("999.999.999-99", {
                completed: function () {
                    $scope.$apply();
                }
            });
        }
    };
});

app.directive("cepMask", function () {
    return {
        require: '?ngModel',
        link: function ($scope, element, attrs, controller) {
            element.mask("99999-999", {
                completed: function () {
                    $scope.$apply();
                }
            });
        }
    };
});

app.directive("cnpjMask", function () {
    return {
        require: '?ngModel',
        link: function ($scope, element, attrs, controller) {
            element.mask("99.999.999/9999-99", {
                completed: function () {
                    $scope.$apply();
                }
            });
        }
    };
});