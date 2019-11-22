var dataObject = [];
var Application = {
    initApplication: function () {
        $(window).load('pageinit', '#page-home', function () {
        })
        $(document).on('pageinit', '#page-kantor', function () {
            Application.initShowKantor();
        })
        $(document).on('pageinit', '#page-pemilih', function () {
            Application.initShowPemilih();
        })
        $(document).on('pageinit', '#page-calon', function () {
            Application.initShowCalon();
        })
        $(document).on('pageinit', '#page-partai', function () {
            Application.initShowPartai();
        })
        $(document).on('click', '#detail-pemilih', function () {
            var nim = $(this).data('nikpemilih');
            Application.initShowDetailPemilih(nim);
        })
        $(document).on('click', '#detail-calon', function () {
            var nik = $(this).data('nikcalon');
            Application.initShowDetailCalon(nik);
        })
        $(document).on('click', '#detail-kantor', function () {
            var nama = $(this).data('idkantor');
            Application.initShowDetailKantor(nama);
        })
        $(document).on('click', '#detail-partai', function () {
            var party = $(this).data('namapartai');
            Application.initShowDetailPartai(party);
        })
    },

    //Show Kantor
    initShowKantor: function () {
        $.ajax({
            url: 'http://projekk.000webhostapp.com/kantor.php',
            type: 'get',
            beforeSend: function () {
                console.log(dataObject.length);
                $.mobile.loading('show', {
                    text: 'Please wait while retrieving data...',
                    textVisible: true
                });
            },
            success: function (dataObject) {
                console.log(dataObject[0].NIM);
                for (let r = 0; r < dataObject.length; r++) {
                    var appendList = '<li><a href= "#page-datakantor?id=' +
                        dataObject[r].ID + '" target="_self" id= "detail-kantor" data-idkantor="' +
                        dataObject[r].ID + '"><h2>' + dataObject[r].NamaKntr + '</h2><p>' + dataObject[r].AlamatKntr +
                        '</p></a></li>';
                    $('#list-kantor').append(appendList);
                    $('#list-kantor').listview('refresh');
                }
            },
            fail: function () {
                console.log("coba lagi");
            },
            complete: function () {
                for (let r = 0; r < dataObject.length; r++) {
                    var appendList = '<li><a href= "#page-datakantor?id=' +
                        dataObject[r].ID + '" target="_self" id= "detail-kantor" data-idkantor="' +
                        dataObject[r].ID + '"><h2>' + dataObject[r].NamaKntr + '</h2><p>' + dataObject[r].AlamatKntr +
                        '</p></a></li>';
                    $('#list-kantor').append(appendList);
                    $('#list-kantor').listview('refresh');
                }
                $.mobile.loading('hide');
            }
        });
    },

    //Show Partai
    initShowPartai: function () {
        $.ajax({
            url: 'http://projekk.000webhostapp.com/partai.php',
            type: 'get',
            beforeSend: function () {
                console.log(dataObject.length);
                $.mobile.loading('show', {
                    text: 'Please wait while retrieving data...',
                    textVisible: true
                });
            },
            success: function (dataObject) {
                console.log(dataObject[0].NIM);
                for (let r = 0; r < dataObject.length; r++) {
                    var appendList = '<li><a href= "#page-datapartai?id=' +
                        dataObject[r].Nama + '" target="_self" id= "detail-partai" data-namapartai="' +
                        dataObject[r].Nama + '"><h2>' + dataObject[r].Nama + '</h2></a></li>';
                    $('#list-partai').append(appendList);
                    $('#list-partai').listview('refresh');
                }
            },
            fail: function () {
                console.log("coba lagi");
            },
            complete: function () {
                for (let r = 0; r < dataObject.length; r++) {
                    var appendList = '<li><a href= "#page-datapartai?id=' +
                        dataObject[r].Nama + '" target="_self" id= "detail-partai" data-namapartai="' +
                        dataObject[r].Nama + '"><h2>' + dataObject[r].Nama + '</h2></a></li>';
                    $('#list-partai').append(appendList);
                    $('#list-partai').listview('refresh');
                }
                $.mobile.loading('hide');
            }
        });
    },

    //Show Pemilih
    initShowPemilih: function () {
        $.ajax({
            url: 'http://projekk.000webhostapp.com/pemilih.php',
            type: 'get',
            beforeSend: function () {
                console.log(dataObject.length);
                $.mobile.loading('show', {
                    text: 'Please wait while retrieving data...',
                    textVisible: true
                });
            },
            success: function (dataObject) {
                console.log(dataObject[0].NIM);
                for (let r = 0; r < dataObject.length; r++) {
                    var appendList = '<li><a href= "#page-datapemilih?id=' +
                        dataObject[r].NIK + '" target="_self" id= "detail-pemilih" data-nikpemilih="' +
                        dataObject[r].NIK + '"><h2>' + dataObject[r].Nama + '</h2><p>' + dataObject[r].NIK +
                        '</p></a></li>';
                    $('#list-pemilih').append(appendList);
                    $('#list-pemilih').listview('refresh');
                }
            },
            fail: function () {
                console.log("coba lagi");
            },
            complete: function () {
                for (let r = 0; r < dataObject.length; r++) {
                    var appendList = '<li><a href= "#page-datapemilih?id=' +
                        dataObject[r].NIK + '" target="_self" id= "detail-pemilih" data-nikpemilih="' +
                        dataObject[r].NIK + '"><h2>' + dataObject[r].Nama + '</h2><p>' + dataObject[r].NIK +
                        '</p></a></li>';
                    $('#list-pemilih').append(appendList);
                    $('#list-pemilih').listview('refresh');
                }
                $.mobile.loading('hide');
            }
        });
    },

    //Show Calon
    initShowCalon: function () {
        $.ajax({
            url: 'http://projekk.000webhostapp.com/calon.php',
            type: 'get',
            beforeSend: function () {
                console.log(dataObject.length);
                $.mobile.loading('show', {
                    text: 'Please wait while retrieving data...',
                    textVisible: true
                });
            },
            success: function (dataObject) {
                console.log(dataObject[0].NIM);
                for (let r = 0; r < dataObject.length; r++) {
                    var appendList = '<li><a href= "#page-datacalon?id=' +
                        dataObject[r].ID + '" target="_self" id= "detail-calon" data-nikcalon="' +
                        dataObject[r].ID + '"><h2>' + dataObject[r].ID + ' - ' + dataObject[r].Nama + '</h2></a></li>';
                    $('#list-calon').append(appendList);
                    $('#list-calon').listview('refresh');
                }
            },
            fail: function () {
                console.log("coba lagi");
            },
            complete: function () {
                // for (let r = 0; r < dataObject.length; r++) {
                //     var appendList = '<li><a href= "#page-datacalon?id=' +
                //         dataObject[r].ID + '" target="_self" id= "detail-calon" data-nikcalon="' +
                //         dataObject[r].ID + '"><h2>' + dataObject[r].ID + '-' + dataObject[r].Nama + '</h2></a></li>';
                //     $('#list-calon').append(appendList);
                //     $('#list-calon').listview('refresh');
                // }
                $.mobile.loading('hide');
            }
        });
    },

    //Detail Pemilih
    initShowDetailPemilih: function (nim) {
        $.ajax({
            url: 'http://projekk.000webhostapp.com/pemilih.php',
            type: 'get',
            beforeSend: function () {
                $.mobile.loading('show', {
                    text: 'Please wait while retrieving data...',
                    textVisible: true
                });
            },
            success: function (dataObject) {
                console.log(dataObject);
                for (let r = 0; r < dataObject.length; r++) {
                    if (dataObject[r].NIK == nim) {
                        $('#p-nim,#p-nama,#p-alamat').empty();
                        $('#p-nim').append('<b>Nomor Induk Kependudukan: </b>' + dataObject[r].NIK);
                        $('#p-nama').append('<b>Nama Lengkap: </b>' + dataObject[r].Nama);
                        $('#p-alamat').append('<b>Alamat Asal: </b>' + dataObject[r].Alamat);
                        break;
                    }
                }
            },
            complete: function () {
                for (let r = 0; r < dataObject.length; r++) {
                    if (dataObject[r].NIK == nim) {
                        $('#p-nim,#p-nama,#p-alamat').empty();
                        $('#p-nim').append('<b>Nomor Induk Kependudukan: </b>' + dataObject[r].NIK);
                        $('#p-nama').append('<b>Nama Lengkap: </b>' + dataObject[r].Nama);
                        $('#p-alamat').append('<b>Alamat Asal: </b>' + dataObject[r].Alamat);
                        break;
                    }
                }
                $.mobile.loading('hide');
            }
        });
    },

    //Detail Calon
    initShowDetailCalon: function (nik) {
        $.ajax({
            url: 'http://projekk.000webhostapp.com/calon.php',
            type: 'get',
            beforeSend: function () {
                $.mobile.loading('show', {
                    text: 'Please wait while retrieving data...',
                    textVisible: true
                });
            },
            success: function (dataObject) {
                console.log(dataObject);
                for (let r = 0; r < dataObject.length; r++) {
                    if (dataObject[r].ID == nik) {
                        $('#p-idcalon,#p-namacalon,#p-visi,#p-misi').empty();
                        $('#p-idcalon').append('<b>Nomor Urut: </b>' + dataObject[r].ID);
                        $('#p-namacalon').append('<b>Nama Lengkap: </b>' + dataObject[r].Nama);
                        $('#p-visi').append('<b>Visi Kedepan: </b>' + dataObject[r].Visi);
                        $('#p-misi').append('<b>Misi Yang Akan Ditempuh: </b>' + dataObject[r].Misi);
                        break;
                    }
                }
            },
            complete: function () {
                for (let r = 0; r < dataObject.length; r++) {
                    if (dataObject[r].ID == nik) {
                        $('#p-idcalon,#p-namacalon,#p-visi,#p-misi').empty();
                        $('#p-idcalon').append('<b>Nomor Urut: </b>' + dataObject[r].ID);
                        $('#p-namacalon').append('<b>Nama: </b>' + dataObject[r].Nama);
                        $('#p-visi').append('<b>Visi Kedepan: </b>' + dataObject[r].Visi);
                        $('#p-misi').append('<b>Misi Yang Akan Ditempuh: </b>' + dataObject[r].Misi);
                        break;
                    }
                }
                $.mobile.loading('hide');
            }
        });
    },

    //Detail Partai
    initShowDetailPartai: function (party) {
        $.ajax({
            url: 'http://projekk.000webhostapp.com/partai.php',
            type: 'get',
            beforeSend: function () {
                $.mobile.loading('show', {
                    text: 'Please wait while retrieving data...',
                    textVisible: true
                });
            },
            success: function (dataObject) {
                console.log(dataObject);
                for (let r = 0; r < dataObject.length; r++) {
                    if (dataObject[r].Nama == party) {
                        $('#p-namapartai,#p-ketuapartai,#p-sejarahpartai').empty();
                        $('#p-namapartai').append(dataObject[r].Nama);
                        $('#p-ketuapartai').append('<b>Ketua Umum: </b>' + dataObject[r].Ketua);
                        $('#p-sejarahpartai').append('<b>Sejarah Partai: </b><br>' + dataObject[r].Sejarah);
                        break;
                    }
                }
            },
            complete: function () {
                for (let r = 0; r < dataObject.length; r++) {
                    if (dataObject[r].Nama == party) {
                        $('#p-namapartai,#p-ketuapartai,#p-sejarahpartai').empty();
                        $('#p-namapartai').append(dataObject[r].Nama);
                        $('#p-ketuapartai').append('<b>Ketua Umum: </b>' + dataObject[r].Ketua);
                        $('#p-sejarahpartai').append('<b>Sejarah Partai: </b>' + dataObject[r].Sejarah);
                        break;
                    }
                }
                $.mobile.loading('hide');
            }
        });
    },

    //Detail Kantor
    initShowDetailKantor: function (nama) {
        $.ajax({
            url: 'http://projekk.000webhostapp.com/kantor.php',
            type: 'get',
            beforeSend: function () {
                $.mobile.loading('show', {
                    text: 'Please wait while retrieving data...',
                    textVisible: true
                });
            },
            success: function (dataObject) {
                console.log(dataObject);
                for (let r = 0; r < dataObject.length; r++) {
                    if (dataObject[r].ID == nama) {
                        $('#p-idkantor,#p-namakantor,#p-alamatkantor,#p-pimpinan').empty();
                        $('#p-idkantor').append('<b>ID Kantor: </b>' + dataObject[r].ID);
                        $('#p-namakantor').append('<b>Cabang: </b>' + dataObject[r].NamaKntr);
                        $('#p-alamatkantor').append('<b>Alamat Kantor: </b>' + dataObject[r].AlamatKntr);
                        $('#p-pimpinan').append('<b>Ketua Cabang: </b>' + dataObject[r].Pimpinan);
                        break;
                    }
                }
            },
            complete: function () {
                for (let r = 0; r < dataObject.length; r++) {
                    if (dataObject[r].ID == nama) {
                        $('#p-idkantor,#p-namakantor,#p-alamatkantor,#p-pimpinan').empty();
                        $('#p-idkantor').append('<b>NIM: </b>' + dataObject[r].ID);
                        $('#p-namakantor').append('<b>Nama: </b>' + dataObject[r].NamaKntr);
                        $('#p-alamatkantor').append('<b>Alamat: </b>' + dataObject[r].AlamatKntr);
                        $('#p-pimpinan').append('<b>Ketua Cabang: </b>' + dataObject[r].Pimpinan);
                        break;
                    }
                }
                $.mobile.loading('hide');
            }
        });
    }
}

