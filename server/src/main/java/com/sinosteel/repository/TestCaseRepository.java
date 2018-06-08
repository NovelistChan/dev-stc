package com.sinosteel.repository;

import com.sinosteel.domain.TestCase;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
@Repository
public interface TestCaseRepository extends BaseRepository<TestCase> {
    TestCase findById(String id);
    @Query("SELECT testCase from TestCase testCase where 1 = 1")
    List<TestCase> findByAllTestPlans();
}
