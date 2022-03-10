
const CardInfo = (props) => {

    // console.log(props.sizes);

    // props.sizes.map(el => {
    //     console.log(el)
    // })

    return (
        <div className="card__info">
            <header className="card__info-header"><span className="flag flag_type_new">new</span>
                <h1 className="card__name">Шапка-бини для новорожденных Nokoset</h1>
                <div className="card__id text">518304-8490-036</div>
            </header>
            <div className="card__content-block">
                <div className="card__content-row">
                    <div className="card__price card__price_new">1199 р.</div>
                    <div className="card__price card__price_old">1499 р.</div>
                </div>
                <div className="card__discount text">Скидка: 20%</div>
            </div>
            <div className="card__content-block">
                <div className="card__subtitle text">Материал:</div>
                <div className="text">50% Шерсть</div>
                <div className="text">50% Акрил</div>
            </div>
            <form method="post" action="" className="form">
                <div className="card__content-block">
                    <div className="card__subtitle text">Выберите размер:</div>
                    <div className="card__content-row card__content-row_checkboxes">
                        {/* {props.sizes.map(el => {
                            return <div className="checkbox-tile checkbox-tile_size_extra">
                                        <input id="card-size-1" name="Card[size]" type="radio" value={el} required className="checkbox-tile__elem" />
                                        <label htmlFor="card-size-1" className="checkbox-tile__label">{el}</label>
                                    </div>
                        })} */}
                        <div className="checkbox-tile checkbox-tile_size_extra">
                            <input id="card-size-1" name="Card[size]" type="radio" value="50" required className="checkbox-tile__elem" />
                            <label htmlFor="card-size-1" className="checkbox-tile__label">50</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_extra">
                            <input id="card-size-2" name="Card[size]" type="radio" value="56" required className="checkbox-tile__elem" />
                            <label htmlFor="card-size-2" className="checkbox-tile__label">56</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_extra">
                            <input id="card-size-3" name="Card[size]" type="radio" value="62" required className="checkbox-tile__elem" />
                            <label htmlFor="card-size-3" className="checkbox-tile__label">62</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_extra">
                            <input id="card-size-4" name="Card[size]" type="radio" value="68" required className="checkbox-tile__elem" />
                            <label htmlFor="card-size-4" className="checkbox-tile__label">68</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_extra">
                            <input id="card-size-5" name="Card[size]" type="radio" value="74" required className="checkbox-tile__elem" />
                            <label htmlFor="card-size-5" className="checkbox-tile__label">74</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_extra">
                            <input id="card-size-6" name="Card[size]" type="radio" value="80" required className="checkbox-tile__elem" />
                            <label htmlFor="card-size-6" className="checkbox-tile__label">80</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_extra">
                            <input id="card-size-7" name="Card[size]" type="radio" value="86" required className="checkbox-tile__elem" />
                            <label htmlFor="card-size-7" className="checkbox-tile__label">86</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_extra">
                            <input id="card-size-8" name="Card[size]" type="radio" value="92" required className="checkbox-tile__elem" />
                            <label htmlFor="card-size-8" className="checkbox-tile__label">92</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_extra">
                            <input id="card-size-9" name="Card[size]" type="radio" value="98" required className="checkbox-tile__elem" />
                            <label htmlFor="card-size-9" className="checkbox-tile__label">98</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_extra">
                            <input id="card-size-10" name="Card[size]" type="radio" value="101" required className="checkbox-tile__elem" />
                            <label htmlFor="card-size-10" className="checkbox-tile__label">101</label>
                        </div>
                    </div>
                    <a href="#" className="link text">Сообщить о поступлении размера</a>
                </div>
                <div className="card__content-block card__content-block_margin_30">
                    <div className="card__subtitle text">Количество:</div>
                    <div className="card__content-row">
                        <div className="card__number input-number">
                            <input id="card-num" name="Card[number]" type="number" step="1" min="1" required className="input-number__elem" />
                            <div className="input-number__counter"><span className="input-number__counter-spin input-number__counter-spin_more">Больше</span><span className="input-number__counter-spin input-number__counter-spin_less">Меньше</span>
                            </div>
                        </div>
                        <div className="card__avaible text">Есть в наличии</div>
                    </div>
                </div>
                <button type="submit" data-popup="good" className="btn form__btn js-popup-open">Добавить в корзину</button>
            </form>
        </div>
    )
}

export default CardInfo;