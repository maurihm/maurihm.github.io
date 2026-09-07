import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CertificatesService } from '../services/certificates-service/certificates.service';
import { Certificate } from '../models/certificates/certificates.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.html',
  styleUrls: ['./certificates.scss'],
  standalone: false
})
export class CertificatesComponent implements OnInit {
  certificatesList: Certificate[] = [];

  constructor(private certificatesService: CertificatesService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('CertificatesComponent initialized');
    this.retrieveCertificates();
  }

  retrieveCertificates(): void {
    this.certificatesService.getCertificates().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe({
      next: (data) => {
        console.log('CertificatesComponent data received:', data);
        
        const kaggleCerts: Certificate[] = [
          {
            name: 'Python',
            organization: 'Kaggle',
            date: '2024',
            url: 'https://raw.githubusercontent.com/maurihm/python-course/refs/heads/main/Mauricio%20Hern%C3%A1ndez%20Mart%C3%ADnez%20-%20Python.png'
          },
          {
            name: 'Pandas',
            organization: 'Kaggle',
            date: '2024',
            url: 'https://raw.githubusercontent.com/maurihm/pandas-course/refs/heads/main/Mauricio%20Hern%C3%A1ndez%20Mart%C3%ADnez%20-%20Pandas.png'
          }
        ];
        
        this.certificatesList = [...data, ...kaggleCerts];
        this.cdr.detectChanges();
      },
      error: (err) => console.error('CertificatesComponent error retrieving data:', err)
    });
  }
}
