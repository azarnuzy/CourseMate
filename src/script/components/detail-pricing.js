class DetailPricing extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="hero-wrap hero-wrap-2">
        <div class="overlay"></div>
        <div class="container">
          <div
            class="
              row
              no-gutters
              slider-text
              align-items-center
              justify-content-center
            "
          >
            <div class="col-md-9 text-center">
              <h1 class="mb-2 bread">PAKET BELAJAR</h1>
            </div>
          </div>
        </div>
      </section>
      <div class="pricing-detail panel">
        <div class="section-title text-center">
          <h2>PAKET BELAJAR</h2>
        </div>
        
        <div class="price-list row d-flex justify-content-center">
          <div class="price-item col-lg-3 col-xl-2 col-md-6 col-sm-12 col-12 d-flex justify-content-center"">
            <div class="price-card price-item-best">
              <p class="price-item-best__label">Best Deal</p>
              <h3 class="price-card__title">Altair</h3>
              <div class="d-flex align-self-end">
                <div class="price-card__tag-discount">Diskon 54%</div>
                <p class="price-card__discount">Rp 550.000</p>
              </div>
              <p class="price-card__price">Rp. 253.000</p>
              <ul class="price-card__list">
                <li class="price-card__list-item">3 minggu bimbel</li>
                <li class="price-card__list-item">3 kali try out</li>
                <li class="price-card__list-item">3 kunci jawaban try out</li>
                <li class="price-card__list-item">Booklet Soal</li>
              </ul>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdgkX_WSlOGMhwsNYw_RskdAYXor_Vooahv9OAO-qHuB0hGhQ/viewform" target="_blank" class="button-pricing">Pilih Paket</a>
            </div>
          </div>
          <div class="price-item col-lg-3 col-xl-2 col-md-6 col-sm-12 col-12 d-flex justify-content-center"">
            <div class="price-card">
              <h3 class="price-card__title">Antares</h3>
              <div class="d-flex align-self-end">
                <div class="price-card__tag-discount">Diskon 45%</div>
                <p class="price-card__discount">Rp 400.000</p>
              </div>
              <p class="price-card__price">Rp. 220.000</p>
              <ul class="price-card__list">
                <li class="price-card__list-item">2 minggu bimbel</li>
                <li class="price-card__list-item">2 kali try out</li>
                <li class="price-card__list-item">2 kunci jawaban try out</li>
                <li class="price-card__list-item">Booklet Soal</li>
              </ul>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdgkX_WSlOGMhwsNYw_RskdAYXor_Vooahv9OAO-qHuB0hGhQ/viewform" target="_blank" class="button-pricing">Pilih Paket</a>
            </div>
          </div>
          <div class="price-item col-lg-3 col-xl-2 col-md-6 col-sm-12 col-12 d-flex justify-content-center"">
            <div class="price-card">
              <h3 class="price-card__title">Starla</h3>
              <div class="d-flex align-self-end">
                <div class="price-card__tag-discount">Diskon 40%</div>
                <p class="price-card__discount">Rp 250.000</p>
              </div>
              <p class="price-card__price">Rp. 150.000</p>
              <ul class="price-card__list">
                <li class="price-card__list-item">1 minggu bimbel</li>
                <li class="price-card__list-item">1 kali try out</li>
                <li class="price-card__list-item">1 kunci jawaban try out</li>
                <li class="price-card__list-item">Booklet Soal</li>
              </ul>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdgkX_WSlOGMhwsNYw_RskdAYXor_Vooahv9OAO-qHuB0hGhQ/viewform" target="_blank" class="button-pricing">Pilih Paket</a>
            </div>
          </div>
          <div class="price-item col-lg-3 col-xl-2 col-md-6 col-sm-12 col-12 d-flex justify-content-center"">
            <div class="price-card">
              <h3 class="price-card__title">Orion</h3>
              <div class="d-flex align-self-end">
                <div class="price-card__tag-discount">Diskon 35%</div>
                <p class="price-card__discount">Rp 100.000</p>
              </div>
              <p class="price-card__price">Rp. 65.000</p>
              <ul class="price-card__list">
                <li class="price-card__list-item">4 kali try out</li>
                <li class="price-card__list-item">4 kunci jawaban try out</li>
                <li class="price-card__list-item">Booklet Soal</li>
              </ul>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdgkX_WSlOGMhwsNYw_RskdAYXor_Vooahv9OAO-qHuB0hGhQ/viewform" target="_blank" class="button-pricing">Pilih Paket</a>
            </div>
          </div>
          <div class="price-item col-lg-3 col-xl-2 col-md-6 col-sm-12 col-12 d-flex justify-content-center"">
            <div class="price-card">
              <h3 class="price-card__title">Sirius</h3>
              <div class="d-flex align-self-end">
                <div class="price-card__tag-discount">Diskon 30%</div>
                <p class="price-card__discount">Rp 30.000</p>
              </div>
              <p class="price-card__price">Rp. 21.000</p>
              <ul class="price-card__list">
                <li class="price-card__list-item">1 kali try out</li>
                <li class="price-card__list-item">1 kunci jawaban try out</li>
                <li class="price-card__list-item">Booklet Soal</li>
              </ul>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdgkX_WSlOGMhwsNYw_RskdAYXor_Vooahv9OAO-qHuB0hGhQ/viewform" target="_blank" class="button-pricing">Pilih Paket</a>
            </div>
          </div>
          <div class="price-item col-lg-3 col-xl-2 col-md-6 col-sm-12 col-12 d-flex justify-content-center"">
            <div class="price-card">
              <h3 class="price-card__title">Paket Beasiswa</h3>
              <a href="#"
                ><span class="requir-free-price" data-bs-toggle="modal" data-bs-target="#exampleModal">Syarat & Ketentuan Berlaku </span
                ><i class="fas fa-external-link-square-alt"></i
              ></a>
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Syarat & Ketentuan</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <ol class="custom-numbers">
                          <li class="mb-2">Follow instagram @coursemate.official</li>
                          <li class="mb-2">Instagram tidak di private selama kegiatan berlangsung</li>
                          <li class="mb-2">Repost postingan open registration di IG Story, like dan tag 5 teman kamu di kolom komentar</li>
                          <li class="mb-2">Upload twibbon dan tag @coursemate.official serta 3 teman kamu. </li>
                      </ol>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex align-self-end">
                <div class="price-card__tag-discount price-card__tag-free">Diskon 100%</div>
                <p class="price-card__discount">Rp 700.000</p>
              </div>
              <p class="price-card__price">Rp. 0</p>
              <ul class="price-card__list">
                <li class="price-card__list-item">1 bulan bimbel</li>
                <li class="price-card__list-item">4 kali try out</li>
                <li class="price-card__list-item">4 kunci jawaban try out</li>
                <li class="price-card__list-item">Booklet Soal</li>
              </ul>
              <a class="button-pricing disable-price">TUTUP</a>
            </div>
          </div>
        </div>
      </div>
        `;
  }
}

customElements.define('detail-pricing', DetailPricing);
