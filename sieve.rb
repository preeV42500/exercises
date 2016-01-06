class Sieve
  attr_reader :limit

  def initialize(limit)
    @limit = limit
  end

  def primes
    range = (2..limit).to_a

    range.each_with_index do |val, idx|
      range.each_with_index do |num, idx2|
        next if num == false || val == false
        range[idx2] = false if num % val == 0 && num != val
      end
    end.select { |val| val }
  end
end
