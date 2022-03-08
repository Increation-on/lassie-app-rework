

const CatalogSort = () => {
    return (
        <div className="catalog__sort">
            <div className="catalog__sort-group"><span className="catalog__sort-text text">Сортировать по:</span>
                <select name="sort" className="js-select select">
                    <option value="popular">Популярности</option>
                    <option value="price">Цене</option>
                    <option value="new">Новизне</option>
                    <option value="availibel">Наличию</option>
                </select>
            </div>
            <div className="catalog__sort-group"><span className="catalog__sort-text text">Отображать по:</span>
                <select name="display" className="js-select select">
                    <option value="12">12</option>
                    <option value="9">9</option>
                    <option value="6">6</option>
                    <option value="3">3</option>
                </select>
            </div>
        </div>
    )
}

export default CatalogSort;