import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Pet {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PetsListComponent implements OnInit {
  @Output() petSelected = new EventEmitter<Pet>();

  selectedPetId: number = 1;

  pets: Pet[] = [
    {
      id: 1,
      name: 'Max',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmXgEH8oVDMKjG5RcckDUPSv9uGyW0vCZVNFwZDN8r8fzNclZpode4Z5_XnEqVMqHw3LK9OiB9uhbDYO1NabKczyW24PSMDCtkF7hYANf6JRoHsM1k5qrXeewBmUib7SeA0qu1sjzAGw7goE5xuHjkOhl4NRD1A_QAe0WJQA5V5NvVVPiSrf7Z1EezOhGNfvkrHE3gzROLvQUIm_mLEIyy-480-72vlH_NVicjGNjtwyCa41UlBHJmog5oP0o4Snj0a-qBnKpL9CM'
    },
    {
      id: 2,
      name: 'Luna',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2bUXfN-g3iUgzdtXkyTyHHB7asysRYFIvmOo-kkc-B50oimhIyhBBzwiUVx77y6LY3iqJptsBy29DpMEoTKs542f2doozZh8DiT_LzHaz5bibdKKJG86SNpM-boiZWg5tYHlzvYBvhBIlFxv0_4C6gT7DgubgNmAP7JKuYiuIez_ob80ASv8tExOPhSBtRU7bq-MNYdiorl84kYiJtDMAW8O3HJGn-gd9pVLKf7HHUFvWEMu9pgpTj0JBTXuUrYo8lL3a5iBvFrw'
    },
    {
      id: 3,
      name: 'Rocky',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8Hj0exZnS5hV9ANC0o5sU4nM6j5wdVJC6PpHe9LArRzANVbSuZnTosU-DVeM47KAuUGx-MIF2x6bSEFq9DpTijvRDtJ4-4oeFmg7QRCIdCA_iS0aw2fOfm2zuQW4xOc3q_w6vJvCgCCVCIvJTj1rypKLWtd0VvITK6nQZ0L3FW-7gmFPuW_QthShTjNWuLH7uKy6O9_qDGzM2Xe3E_i9U-YJRd9KLehMmWpaGIq5Si7tCTrfXCOA10qtxsV1bybzxz7HmmNvzXmU'
    },
    {
      id: 4,
      name: 'Coco',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdtrJ-2lLPiQ3T1RgODNpLYumJqRT06yRaJoKq7vy3xpg1zGqkhJ3m98y7diPkAxk_fS27kf_oJWG3uZ_2Ld_SWzU5DSUw2Hy6UwB-hRVD-9XymsaHCjX4XzoNmQpzp4qFBJi4EjDYlzV4B5I9hAKR4-sUzxX-r2uwgKXSscZvbZzju9oi7WYZ6Sx6IPAVnXKQ-aAeXups3-lAQYVrTW-LHFWkSG8qGsqgrrONgPOS941-dL3k4hJxXBSWX2w3qbvG_wdooI5Mjdc'
    }
  ];

  constructor() {}

  ngOnInit() {}

  onPetSelect(pet: Pet) {
    this.selectedPetId = pet.id;
    this.petSelected.emit(pet);
    console.log('Mascota seleccionada:', pet.name);
  }
}
