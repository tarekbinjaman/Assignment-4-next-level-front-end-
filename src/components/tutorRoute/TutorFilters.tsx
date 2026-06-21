type Props = {
  category: string;
  setCategory: React.Dispatch<
    React.SetStateAction<string>
  >;

  sort: string;
  setSort: React.Dispatch<
    React.SetStateAction<string>
  >;
};

export default function TutorFilters({
  category,
  setCategory,
  sort,
  setSort,
}: Props) {
  return (
    <div className="space-y-5">
      <div>
        <label className="font-semibold">
          Subject
        </label>

        <select
          className="select select-bordered w-full mt-2"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option value="">
            All Subjects
          </option>

          <option value="Programming">
            Programming
          </option>

          <option value="Web Development">
            Web Development
          </option>

          <option value="Math">
            Math
          </option>
        </select>
      </div>

      <div>
        <label className="font-semibold">
          Price
        </label>

        <select
          className="select select-bordered w-full mt-2"
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
        >
          <option value="">
            Default
          </option>

          <option value="price_asc">
            Low → High
          </option>

          <option value="price_desc">
            High → Low
          </option>
        </select>
      </div>
    </div>
  );
}